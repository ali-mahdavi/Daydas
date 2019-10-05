/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { CategoryComponentsPage, CategoryDeleteDialog, CategoryUpdatePage } from './category.page-object';

const expect = chai.expect;

describe('Category e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let categoryUpdatePage: CategoryUpdatePage;
  let categoryComponentsPage: CategoryComponentsPage;
  let categoryDeleteDialog: CategoryDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Categories', async () => {
    await navBarPage.goToEntity('category');
    categoryComponentsPage = new CategoryComponentsPage();
    await browser.wait(ec.visibilityOf(categoryComponentsPage.title), 5000);
    expect(await categoryComponentsPage.getTitle()).to.eq('daydasApp.category.home.title');
  });

  it('should load create Category page', async () => {
    await categoryComponentsPage.clickOnCreateButton();
    categoryUpdatePage = new CategoryUpdatePage();
    expect(await categoryUpdatePage.getPageTitle()).to.eq('daydasApp.category.home.createOrEditLabel');
    await categoryUpdatePage.cancel();
  });

  it('should create and save Categories', async () => {
    const nbButtonsBeforeCreate = await categoryComponentsPage.countDeleteButtons();

    await categoryComponentsPage.clickOnCreateButton();
    await promise.all([
      categoryUpdatePage.setTitleInput('title'),
      categoryUpdatePage.setSortOrderInput('5'),
      categoryUpdatePage.setDateAddedInput('2000-12-31'),
      categoryUpdatePage.setDateModifiedInput('2000-12-31'),
      categoryUpdatePage.statusSelectLastOption(),
      categoryUpdatePage.parentCategorySelectLastOption()
      // categoryUpdatePage.productSelectLastOption(),
    ]);
    expect(await categoryUpdatePage.getTitleInput()).to.eq('title', 'Expected Title value to be equals to title');
    expect(await categoryUpdatePage.getSortOrderInput()).to.eq('5', 'Expected sortOrder value to be equals to 5');
    expect(await categoryUpdatePage.getDateAddedInput()).to.eq('2000-12-31', 'Expected dateAdded value to be equals to 2000-12-31');
    expect(await categoryUpdatePage.getDateModifiedInput()).to.eq('2000-12-31', 'Expected dateModified value to be equals to 2000-12-31');
    await categoryUpdatePage.save();
    expect(await categoryUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await categoryComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Category', async () => {
    const nbButtonsBeforeDelete = await categoryComponentsPage.countDeleteButtons();
    await categoryComponentsPage.clickOnLastDeleteButton();

    categoryDeleteDialog = new CategoryDeleteDialog();
    expect(await categoryDeleteDialog.getDialogTitle()).to.eq('daydasApp.category.delete.question');
    await categoryDeleteDialog.clickOnConfirmButton();

    expect(await categoryComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
