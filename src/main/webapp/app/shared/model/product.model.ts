import { Moment } from 'moment';
import { ICategory } from 'app/shared/model/category.model';

export interface IProduct {
  id?: number;
  title?: string;
  subtitle?: string;
  keywords?: string;
  description?: string;
  rating?: number;
  imageContentType?: string;
  image?: any;
  dateAdded?: Moment;
  dateModified?: Moment;
  categories?: ICategory[];
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public title?: string,
    public subtitle?: string,
    public keywords?: string,
    public description?: string,
    public rating?: number,
    public imageContentType?: string,
    public image?: any,
    public dateAdded?: Moment,
    public dateModified?: Moment,
    public categories?: ICategory[]
  ) {}
}
