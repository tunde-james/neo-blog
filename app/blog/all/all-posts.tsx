"use client";

import { useState } from "react";
import { CategorySelectorProps, CategorySelector } from "./category-selector";
import { PostListProps, PostsList } from "./posts-list";

type Props = CategorySelectorProps & PostListProps;

const AllPosts = (props: Props) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );

  const handleCategoryClick = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
  };

  const filteredPosts = selectedCategoryId
    ? props.posts.filter((post) =>
        post.categories.find((category) => category.id === selectedCategoryId),
      )
    : props.posts;

  return (
    <>
      <CategorySelector
        categories={props.categories}
        selectedCategoryId={selectedCategoryId}
        selectCategory={handleCategoryClick}
      />
      <PostsList posts={filteredPosts} />
    </>
  );
};

export default AllPosts;
