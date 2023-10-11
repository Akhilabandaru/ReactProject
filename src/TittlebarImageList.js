import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 1300, height: 450 }}>
      <ImageListItem key="Subheader" cols={10}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.tresemme.in/cdn/shop/files/TSM_Mobile_Banners_425_x_425px-03_600x.jpg?v=1680691703',
    title: 'Haircare',
    author: '@tjdragotta',
  },
  {
    img: 'https://img.lovepik.com/desgin_photo/45000/2665_list.jpg',
    title: 'Women Footwears',
    author: '@katie_wasserman',
  },
  {
    img: 'https://i.pinimg.com/474x/ff/ae/74/ffae741ed6a8a8d944975bd552be57ba.jpg',
    title: 'Nail',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/736x/ea/d5/43/ead543b2357810072374785a7976c8fb.jpg',
    title: 'Watches',
    author: '@shelleypauls',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jPAmVMsNQOQx7YkJ_unGbLdcR01CxLSigQ&usqp=CAU',
    title: 'Fashion clothing',
    author: '@fardcloosgh',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT304-yW2jLfT72mEUovAZWxIe9KyfmDxnX-g&usqp=CAU',
    title: 'Shoe Wear',
    author: '@rollelflex_graphy726',
  },

  {
    img: 'https://png.pngtree.com/thumb_back/fh260/background/20230413/pngtree-makeup-skin-care-products-cosmetics-beauty-photography-advertising-background-image_2218552.jpg',
    title: 'Makeup',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.meesho.com/images/products/144690588/ysvpt_512.webp',
    title: 'Western Wear',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  
 
];
