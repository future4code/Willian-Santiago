import { Typography } from "@material-ui/core"
import React from "react"
import Candidate from "./CandidateList"
import { ContentContainer } from "./styled"
import TripInfo from "./TripInfo"

const TripDetailPage = () => {
  return(
    <div>
      <Typography variant="h2">Detalhes</Typography>

      <ContentContainer>
      <TripInfo />
      
      <Candidate />
      </ContentContainer>

    </div>
  )
}
export default TripDetailPage