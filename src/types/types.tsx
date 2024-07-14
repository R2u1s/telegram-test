export type TTrack = {
  url: string, 
  image: string,
  name: string,
  theme: string,
  length: string
}

export type TStore = {
  user: string,
  authRequest:boolean,
  authSuccess:boolean,
  authFailed:boolean,
  dataRequest:boolean,
  dataSuccess:boolean,
  dataFailed:boolean,
  tracks:TTrack[] | null
}

export type TUser = {
  accessToken:string
}

export type TRes = {
  quote: string
}

export type TResSuccess = {
  success: boolean
}