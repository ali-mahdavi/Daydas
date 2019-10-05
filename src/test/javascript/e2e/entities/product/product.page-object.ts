import { browser, ExpectedConditions, element, by, ElementFinder } from 'protractor';

export class ProductComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-product div table .btn-danger'));
  title = element.all(by.css('jhi-product div h2#page-heading span')).first();

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

export class ProductUpdatePage {
  pageTitle = element(by.id('jhi-product-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  titleInput = element(by.id('field_title'));
  subtitleInput = element(by.id('field_subtitle'));
  keywordsInput = element(by.id('field_keywords'));
  descriptionInput = element(by.id('field_description'));
  ratingInput = element(by.id('field_rating'));
  imageInput = element(by.id('file_image'));
  dateAddedInput = element(by.id('field_dateAdded'));
  dateModifiedInput = element(by.id('field_dateModified'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setTitleInput(title) {
    await this.titleInput.sendKeys(title);
  }

  async getTitleInput() {
    return await this.titleInput.getAttribute('value');
  }

  async setSubtitleInput(subtitle) {
    await this.subtitleInput.sendKeys(subtitle);
  }

  async getSubtitleInput() {
    return await this.subtitleInput.getAttribute('value');
  }

  async setKeywordsInput(keywords) {
    await this.keywordsInput.sendKeys(keywords);
  }

  async getKeywordsInput() {
    return await this.keywordsInput.getAttribute('value');
  }

  async setDescriptionInput(description) {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput() {
    return await this.descriptionInput.getAttribute('value');
  }

  async setRatingInput(rating) {
    await this.ratingInput.sendKeys(rating);
  }

  async getRatingInput() {
    return await this.ratingInput.getAttribute('value');
  }

  async setImageInput(image) {
    await this.imageInput.sendKeys(image);
  }

  async getImageInput() {
    return await this.imageInput.getAttribute('value');
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

export class ProductDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-product-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-product'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}