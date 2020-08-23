export interface Assignment {
  id: string;
  keywordID: Keyword;
}

export interface Keyword {
  id: string;
  title: string;
  authorID?: string;
}

export interface Category {
  id: string;
  title: string;
}

export interface CategorizedKeyword {
  keywordID: string;
  categoryID: string;
  subcategoryIDs: Array<string>;
  modifierID: string;
}
export interface ReturnedCategorization {
  approverID: { fullname: string; id: string };
  comment: string;
  id: string;
  isApproved: boolean;
  keywordID: { title: string; id: string };
}

export interface Modifier {
  id: string;
  title: string;
}

export interface WeeklyStats {
  days: Array<string>;
  data: { keywordsAssigned: Array<number>; keywordsCategorized: Array<number> };
}
