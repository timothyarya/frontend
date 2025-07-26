import ConvertApi from "convertapi-js"

const convertApi = ConvertApi.auth(process.env.NEXT_PUBLIC_CONVERT_API_SECRET)

export default convertApi