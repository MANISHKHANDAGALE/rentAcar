
import request, { gql } from "graphql-request"


const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clldztc6841zx01umdqjv9xok/master";
export const getCarsList = async() => {

  const query = gql`
  
    query CarLists {
        carLists {
          carAvg
          createdAt
          id
          name
          price
          publishedAt
          updatedAt
          seat
          image {
            url
          }
          carType
          carBrand
        }
      }      
  `
 const result = await  request(MASTER_URL,query)
 return result;

}
export const getStoreLocations=async()=>{
  const query=gql`
  query storeLocation {
    storesLocations {
      address
    }
  }  
  `
  const result=await request(MASTER_URL,query);
  return result;
}