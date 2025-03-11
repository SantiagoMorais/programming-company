export interface ICategories {
  categories: Array<{
    id: string;
    categoryName: string;
    lucideIconSvg: string;
    projects: Array<{
      id: string;
      description: string;
      projectUrl: string;
      banner: {
        url: string;
      };
    }>;
  }>;
}

export interface IGetProjectsByCategories {
  data: ICategories;
}
