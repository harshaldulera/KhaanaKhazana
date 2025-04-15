import { gql } from '@apollo/client';

export const CREATE_DONAR = gql`
  mutation CreateDonar($input: CreateDonarInput!) {
    createDonar(input: $input) {
      id
      name
      email
      address
      city
      state
      pinCode
      aadharNumber
      cuisineType
    }
  }
`;

export const CREATE_NGO = gql`
  mutation CreateNGO($input: CreateNGOInput!) {
    createNGO(input: $input) {
      id
      name
      registrationNumber
      yearOfEstablishment
      type
      website
      description
      contactNumber
      alternateContactNumber
      email
      address
      state
      city
      pinCode
      areasOfOperation
      preferredDonationTypes
      pickupCapacity
      storageFacility
    }
  }
`;

export const CREATE_VOLUNTEER = gql`
  mutation CreateVolunteer($input: CreateVolunteerInput!) {
    createVolunteer(input: $input) {
      id
      name
      email
      contactNumber
      address
      city
      state
      pinCode
    }
  }
`;

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($input: donarTransection_insert_input!) {
    insert_donarTransection_one(object: $input) {
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
      }
      ngo {
        id
        name
      }
      volunteer {
        id
        name
      }
    }
  }
`;

export const UPDATE_TRANSACTION_STATUS = gql`
  mutation UpdateTransactionStatus($id: Int!, $status: transectionStatus!) {
    update_donarTransection_by_pk(pk_columns: {id: $id}, _set: {status: $status}) {
      id
      status
    }
  }
`; 