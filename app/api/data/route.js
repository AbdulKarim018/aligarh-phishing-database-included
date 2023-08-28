import Data from '@/utils/models/Data'
import { connectToDB } from '@/utils/index';

export async function handler(req, res) {
    await connectToDB()
    const response = await Data.find();
    return new Response(JSON.stringify(response))
}

export { handler as POST }