interface listType {
  id: string;
  text: string;
}

export const SortTypeList: listType[] = [
  {
    id: "popular",
    text: "인기순",
  },
  {
    id: "new",
    text: "최신순",
  },
  {
    id: "old",
    text: "과거순",
  },
];

export default SortTypeList;
