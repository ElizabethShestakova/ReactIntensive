import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pokemon-detective-pikachu-1-1552650378.jpg?crop=0.411xw:0.988xh;0.355xw,0.00833xh&resize=480:*"
                alt="pokemon"
                name="Pikachu_the_pokemon"/> 
            <div className="users__block">
                <User 
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/dd4akx5-e7d324bc-8e53-4e04-9309-ee587992a4cc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGQ0YWt4NS1lN2QzMjRiYy04ZTUzLTRlMDQtOTMwOS1lZTU4Nzk5MmE0Y2MucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7Abrz3gCh7zLGbxFrE94lYUY6xfPSoBKM1W6KqB0pdg"
                    alt="pokemon"
                    name="PsyDuck"
                    min/> 
                <User 
                    src="https://i.pinimg.com/736x/20/4e/be/204ebede928d3402b082ac0267ac3a4b.jpg"
                    alt="pokemon"
                    name="Bulbasaur"
                    min/> 
                <User 
                    src="https://media.comicbook.com/2019/04/detective-pikachu-charizard-1167101-1280x0.jpeg"
                    alt="pokemon"
                    name="Charizard_the_pokemon"
                    min/>
                <User 
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/dd4aps3-5c7a8849-aab1-4f8f-933e-84240f3c1c35.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGQ0YXBzMy01YzdhODg0OS1hYWIxLTRmOGYtOTMzZS04NDI0MGYzYzFjMzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pBvJybBLbIIU0hxYlQm1Qp_g0h2JlT4btlog2_c1VwI"
                    alt="pokemon"
                    name="Squirtle_water"
                    min/>             
            </div>
        </div>
    )
}