import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MapImage from "../map.png";
import AnalysisImage from "../analysis.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function AdvancedImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={200} gap={1} className={classes.imageList}>
          <ImageListItem key={"sss"} cols={2} rows={2}>
            <img src={MapImage} alt={"saas"} />
            <ImageListItemBar
              title={"全国性侵热力图"}
              position="top"
              actionIcon={
                <IconButton aria-label={`star ${"ss"}`} className={"sa"}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </ImageListItem>
        <ImageListItem key={"sss"} cols={2} rows={2}>
          <img src={AnalysisImage} alt={"saas"} />
          <ImageListItemBar
            title={"施暴者年龄分布图"}
            position="top"
            actionIcon={
              <IconButton aria-label={`star ${"ss"}`} className={"sa"}>
                <StarBorderIcon />
              </IconButton>
            }
            actionPosition="left"
            className={classes.titleBar}
          />
        </ImageListItem>
      </ImageList>
    </div>
  );
}
