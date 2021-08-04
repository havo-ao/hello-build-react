export interface toastPageInterface{
   show: boolean, 
   msg: string | undefined, 
   color: string | undefined
}

export const sizeParser = (
   sizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number
   }) => {
      const formattedColSizes = {
         xs: String(sizes.xs>0 ? sizes.xs : undefined),
         sm: String(sizes.sm>0 ? sizes.sm : undefined),
         md: String(sizes.md>0 ? sizes.md : undefined),
         lg: String(sizes.lg>0 ? sizes.lg : undefined),
         xl: String(sizes.xl>0 ? sizes.xl : undefined)
      };
      return formattedColSizes
}

// Responsive configuration
export const colSizes = sizeParser({ xs: 12, sm: 10, md: 8, lg: 8, xl: 6 });

export const hbPage = {
   col: {
      classes: 'ion-no-padding',
      sizes: colSizes,
   },
   card:{
      classes: 'ion-no-padding ion-padding-bottom',
   },
   cardTitle:{
      classes: 'ion-padding',
   },
   cardContent: {
      classes: 'ion-no-padding'
   }
}