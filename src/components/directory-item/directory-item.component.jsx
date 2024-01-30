import {
  DirectoryItemContainer,
  backgroundImage,
  Title,
  ShopText,
  Body,
  BackgroundImage,
} from './directory-item.styles';
import { useNavigate } from 'react-router-dom';

import React from 'react';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></BackgroundImage>
      <Body>
        <Title>{title}</Title>
        <ShopText>Shop now</ShopText>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
