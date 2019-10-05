import { browser, ExpectedConditions, element, by, ElementFinder } from 'protractor';

export class CategoryComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-category div table .btn-danger'));
  title = element.all(by.css('jhi-category div h2#page-heading span')).first();

  async clickOnCreateButton(timeout?: number) {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(timeout?: number) {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class CategoryUpdatePage {
  pageTitle = element(by.id('jhi-category-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  titleInput = element(by.id('field_title'));
  sortOrderInput = element(by.id('field_sortOrder'));
  dateAddedInput = element(by.id('field_dateAdded'));
  dateModifiedInput = element(by.id('field_dateModified'));
  statusSelect = element(by.id('field_status'));
  parentCategorySelect = element(by.id('field_parentCategory'));
  productSelect = element(by.id('field_product'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setTitleInput(title) {
    await this.titleInput.sendKeys(title);
  }

  async getTitleInput() {
    return await this.titleInput.getAttribute('value');
  }

  async setSortOrderInput(sortOrder) {
    await this.sortOrderInput.sendKeys(sortOrder);
  }

  async getSortOrderInput() {
    return await this.sortOrderInput.getAttribute('value');
  }

  async setDateAddedInput(dateAdded) {
    await this.dateAddedInput.sendKeys(dateAdded);
  }

  async getDateAddedInput() {
    return await this.dateAddedInput.getAttribute('value');
  }

  async setDateModifiedInput(dateModified) {
    await this.dateModifiedInput.sendKeys(dateModified);
  }

  async getDateModifiedInput() {
    return await this.dateModifiedInput.getAttribute('value');
  }

  async setStatusSelect(status) {
    await this.statusSelect.sendKeys(status);
  }

  async getStatusSelect() {
    return await this.statusSelect.element(by.css('option:checked')).getText();
  }

  async statusSelectLastOption(timeout?: number) {
    await this.statusSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async parentCategorySelectLastOption(timeout?: number) {
    await this.parentCategorySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async parentCategorySelectOption(option) {
    await this.parentCategorySelect.sendKeys(option);
  }

  getParentCategorySelect(): ElementFinder {
    return this.parentCategorySelect;
  }

  async getParentCategorySelectedOption() {
    return await this.parentCategorySelect.element(by.css('option:checked')).getText();
  }

  async productSelectLastOption(timeout?: number) {
    await this.productSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async productSelectOption(option) {
    await this.productSelect.sendKeys(option);
  }

  getProductSelect(): ElementFinder {
    return this.productSelect;
  }

  async getProductSelectedOption() {
    return await this.productSelect.element(by.css('option:checked')).getText();
  }

  async save(timeout?: number) {
    await this.saveButton.click();
  }

  async cancel(timeout?: number) {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class CategoryDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-category-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-category'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
