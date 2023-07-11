import axios from 'axios'
import Title from './components/title'


export default async function Home() {
  const user = await (async () => {
    const user = await axios.get('http://localhost:8080/real-estate-users/a526193e-3be7-45dc-b425-217c2ed88c45')
    return user?.data || {}
  })()

  return (
    <main>
      <Title {...user}/>
    </main>
  )
}
