import { gql } from "@apollo/client";

// User registration mutations
export const CREATE_DONOR = gql`
  mutation CreateDonor($input: donar_insert_input!) {
    insert_donar_one(object: $input) {
      id
      name
      email
      phone_number
      address
      cuisine_type
      kyc_document
      password
    }
  }
`;

export const CREATE_NGO = gql`
  mutation CreateNgo($input: ngo_insert_input!) {
    insert_ngo_one(object: $input) {
      id
      name
      email
      phone_number
      address
      kyc_document
      poc_name
      poc_phone_number
    }
  }
`;

export const CREATE_VOLUNTEER = gql`
  mutation CreateVolunteer($input: volunteer_insert_input!) {
    insert_volunteer_one(object: $input) {
      id
      name
      email
      phone_number
      vehicle_number
      vehicle_type
      current_location
      kyc_document
      availability
    }
  }
`;

// Login queries (split by role)
export const LOGIN_DONOR = gql`
  query LoginDonor($email: String!, $password: String!) {
    donar(where: { email: { _eq: $email }, password: { _eq: $password } }) {
      id
      name
      email
    }
  }
`;

export const LOGIN_NGO = gql`
  query LoginNgo($email: String!, $password: String!) {
    ngo(where: { email: { _eq: $email }, password: { _eq: $password } }) {
      id
      name
      email
    }
  }
`;

export const LOGIN_VOLUNTEER = gql`
  query LoginVolunteer($email: String!, $password: String!) {
    volunteer(where: { email: { _eq: $email }, password: { _eq: $password } }) {
      id
      name
      email
    }
  }
`;

// Combined login query for all roles
export const LOGIN_USER = gql`
  query LoginUser($email: String!, $password: String!) {
    donar(where: { email: { _eq: $email }, password: { _eq: $password } }) {
      id
      name
      email
    }
    ngo(where: { email: { _eq: $email }, password: { _eq: $password } }) {
      id
      name
      email
    }
    volunteer(where: { email: { _eq: $email }, password: { _eq: $password } }) {
      id
      name
      email
    }
  }
`;

// Transaction mutations
export const CREATE_DONATION = gql`
  mutation CreateDonation($input: donar_transaction_insert_input!) {
    insert_donar_transaction_one(object: $input) {
      id
      donar_id
      food_details
      serving_quantity
      food_type
      pickup_location
      pickup_time
      expiry_date
      special_instructions
      status
      is_cooling_required
      created_at
    }
  }
`;

export const UPDATE_DONATION_STATUS = gql`
  mutation UpdateDonationStatus($id: Int!, $status: String!, $ngo_id: Int) {
    update_donar_transaction_by_pk(
      pk_columns: { id: $id }
      _set: { status: $status, ngo_id: $ngo_id }
    ) {
      id
      status
      ngo_id
    }
  }
`;

export const ASSIGN_VOLUNTEER = gql`
  mutation AssignVolunteer($transaction_id: Int!, $volunteer_id: Int!) {
    update_donar_transaction_by_pk(
      pk_columns: { id: $transaction_id }
      _set: { volunteer_id: $volunteer_id, status: "IN_TRANSIT" }
    ) {
      id
      status
      volunteer_id
    }
  }
`;

export const UPDATE_VOLUNTEER_LOCATION = gql`
  mutation UpdateVolunteerLocation(
    $volunteer_id: Int!
    $latitude: Float!
    $longitude: Float!
  ) {
    update_volunteer_by_pk(
      pk_columns: { id: $volunteer_id }
      _set: { current_latitude: $latitude, current_longitude: $longitude }
    ) {
      id
      current_latitude
      current_longitude
    }
  }
`;

// Query donations (no changes required)
export const GET_DONOR_TRANSACTIONS = gql`
  query GetDonorTransactions($donor_id: bigint!) {
    donar_transaction(
      where: { donar_id: { _eq: $donor_id } }
      order_by: { created_at: desc }
    ) {
      id
      food_details
      pickup_location
      status
      created_at
      pickup_time
      serving_quantity
      food_type
      ngo {
        id
        name
        poc_phone_number
      }
      volunteer {
        id
        name
        phone_number
        current_location
      }
    }
  }
`;
export const GET_AVAILABLE_DONATIONS = gql`
  query GetAvailableDonations {
    donar_transaction(
      where: { status: { _eq: PENDING }, ngo_id: { _is_null: true } }
      order_by: { created_at: desc }
    ) {
      id
      food_details
      pickup_location
      status
      created_at
      pickup_time
      expiry_time
      quantity
      food_type
      donar {
        id
        name
        phoneNumber
      }
    }
  }
`;

export const GET_NGO_TRANSACTIONS = gql`
  query GetNGOTransactions($ngo_id: Int!) {
    donar_transaction(
      where: { ngo_id: { _eq: $ngo_id } }
      order_by: { created_at: desc }
    ) {
      id
      food_details
      pickup_location
      status
      created_at
      pickup_time
      expiry_time
      quantity
      food_type
      donar {
        id
        name
        phoneNumber
      }
      volunteer {
        id
        name
        phoneNumber
        current_latitude
        current_longitude
      }
    }
  }
`;

export const GET_AVAILABLE_PICKUPS = gql`
  query GetAvailablePickups {
    donar_transaction(
      where: {
        status: { _eq: "ACCEPTED" }
        ngo_id: { _is_null: false }
        volunteer_id: { _is_null: true }
      }
      order_by: { created_at: desc }
    ) {
      id
      food_details
      pickup_location
      status
      created_at
      pickup_time
      expiry_time
      quantity
      food_type
      donar {
        id
        name
        phoneNumber
        address
      }
      ngo {
        id
        name
        phoneNumber
        address
      }
    }
  }
`;

export const GET_VOLUNTEER_PICKUPS = gql`
  query GetVolunteerPickups($volunteer_id: Int!) {
    donar_transaction(
      where: { volunteer_id: { _eq: $volunteer_id } }
      order_by: { created_at: desc }
    ) {
      id
      food_details
      pickup_location
      status
      created_at
      pickup_time
      expiry_time
      quantity
      food_type
      donar {
        id
        name
        phoneNumber
        address
      }
      ngo {
        id
        name
        phoneNumber
        address
      }
    }
  }
`;
