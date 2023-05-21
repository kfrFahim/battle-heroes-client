import { useEffect } from "react"

const useTtile = title => {
     useEffect(()=> {
          document.title = `${title} - BattleHeroes `
     } , [title])
}

export default useTtile