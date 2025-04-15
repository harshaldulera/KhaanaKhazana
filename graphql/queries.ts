import { gql } from '@apollo/client';

export const GET_DONARS = gql`
  query GetDonars {
    donar {
      id
      name
      email
      phoneNumber
      address
      kycdoc
      CusineType
    }
  }
`;

export const GET_NGOS = gql`
  query GetNgos {
    ngo {
      id
      name
      email
      phoneNumber
      address
      kycdoc
      pocName
      pocPhoneNumber
    }
  }
`;

export const GET_VOLUNTEERS = gql`
  query GetVolunteers {
    volunteer {
      id
      name
      email
      phoneNumber
      currentLocation
      kycdoc
      availability
    }
  }
`;

export const GET_DONAR_TRANSACTIONS = gql`
  query GetDonarTransactions {
    donarTransection {
      id
      foodDetails
      servingQuantity
      expiryDate
      pickupLocation
      iscoolingRequired
      moreReq
      rating
      feedback
      status
      donar {
        id
        name
        email
      }
      ngo {
        id
        name
        email
      }
      volunteer {
        id
        name
        email
      }
    }
  }
`; 