import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {

    const format = (userName) => `@${userName}`

    return (
        <section className='app'>
            <TwitterFollowCard formatUserName={format} userName="jacob" initialIsFollowing={true}>
                Carlos Guerrero  Garcia
            </TwitterFollowCard>

            <TwitterFollowCard formatUserName={format} userName="carlosjj77679" >
                Francisco
            </TwitterFollowCard>





        </section>


    )
}