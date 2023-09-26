import User from '@/models/User'
import connect from '@/utils/db'
import bcrypt from 'bcryptjs'

export const POST = async (request) => {
  const { name, email, password } = await request.json()

  await connect()

  const hashPassword = await bcrypt.hash(password, 5)

  const newUser = new User({
    name,
    email,
    password: hashPassword,
  })

  try {
    await newUser.save()
    return new NextResponse('Użytkownik został utworzony', { status: 201 })
  } catch (err) {
    return new NextResponse(err.message, { status: 500 })
  }
}
