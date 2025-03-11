export interface ICategory {
  id: string;
  categoryName: string;
  portfolios: Array<{
    id: string;
    description: string;
    banner: {
      url: string;
    };
  }>;
}

export interface IGetProjectsByCategories {
  data: {
    categories: Array<ICategory>;
  };
}
