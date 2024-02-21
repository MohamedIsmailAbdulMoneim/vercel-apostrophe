'use client'

import ImgMediaCard from '@/components/card/card'
import { Grid } from '@mui/material';

const Course = ({items}) => {
  
  return (

      <Grid container spacing={1}>
        {items.map(item => {
          const {id, coursename, courselink} = item
          return (
          <Grid key={id}  xs={4}>
                  <ImgMediaCard coursename={coursename} courselink={courselink}  />
          </Grid>
          )
        })
      }
          
      </Grid>
    // <ul>
    //   <ImgMediaCard />
    // {items.map(item => (
    //   <li key={item.id}>{item.coursename}</li>
    // ))}
    // </ul>
  )
}

export default Course