
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
export const getStoreLocations = async () => {
  const query = gql`query storeLocation {
  storeLocations {
    address
  }
}`
  const result = await request("https://ap-south-1.cdn.hygraph.com/content/cm0f43ns900cd07ulyp18pru4/master",query);
  return result;
}
export const createBooking=async(formValue:any)=>{
  const mutationQuery=gql`
  mutation MyMutation {
    createBooking(
      data:  {userName: "`+formValue.userName+`", 
      pickUpDate: "`+formValue.pickUpDate+`", 
      pickUpTime: "`+formValue.pickUpTime+`", 
      dropOffDate: "`+formValue.dropOffDate+`", 
      dropOffTime: "`+formValue.dropOffTime+`", 
      contactNumber: "`+formValue.contactNumber+`", 
      carId: {connect: 
        {id: "`+formValue.carId+`"}}}
    ) {
      id
    }
  }
  
  `

  const result=await request(MASTER_URL,mutationQuery);
  return result;
}