import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core"
import React from "react"

const TripInfo = () => {
    return(
        <div>
            Info
            
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBotton>
                        Informações da viagem
                    </Typography>

                    <Typography variant="h6" component="h2">
                        Teste 2
                    </Typography>

                    <Typography color="TextSecondary">
                        Teste 3

                    </Typography>

                    <Typography variant="body2" component="p">
                        Teste12
                    <br />
                    {"Teste"}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}
export default TripInfo