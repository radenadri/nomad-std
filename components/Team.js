import TeamItem from './TeamItem'

const Team = ({ teams }) => (
  <div className="mt-16 md:gap-24 lg:mt-20">
    <h4 className="text-3xl font-bold text-center text-black font-montserrat">
      The nomad people
    </h4>
    <p className="max-w-md mx-auto mt-4 text-xl text-center text-black">
      The problem solvers, creative thinker, hardworker, and pure passionate people
    </p>
    <div className="grid grid-cols-2 mt-12 md:grid-cols-3 gap-x-6 gap-y-12">
      {
        teams.map(team => <TeamItem key={team.id} {...team} />)
      }
    </div>
  </div>
)

export default Team