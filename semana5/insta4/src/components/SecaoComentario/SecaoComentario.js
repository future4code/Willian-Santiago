import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {

	}
semana6-aula21
	onChangeComentario() {


	onChangeComentario = (event) => {
		this.setState({comentarios: event.target.value})
master
	}

	render() {
		return <CommentContainer>
			<InputComentario
semana6-aula21
				placeholder={'Comentário'}
				value={''}

				
				placeholder={'Comentário'}
				value={this.state.comentarios}
master
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
