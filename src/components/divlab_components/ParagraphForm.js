import React, { Component } from 'react';
import ParagraphComponent from './ParagraphComponent';
import { Button, Form } from 'semantic-ui-react';

export default class ParagraphForm extends Component {
	constructor(props) {
		super(props);
		if (this.props.info) {
			const { content, id, edit } = this.props.info;
			this.state = {
				content,
				id,
				edit,
			};
		} else {
			this.state = {
				content: '',
				id: '',
				edit: true,
			};
		}

		this.switchEdit = this.switchEdit.bind(this);
	}

	switchEdit(evt) {
		evt.preventDefault();
		this.setState({
			edit: !this.state.edit,
		});
	}

	handleChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	render() {
		return this.state.edit ? (
			<div>
				<Form
					style={{
						border: '2px dotted white',
						padding: '10px',
						borderRadius: '10px',
					}}
					onSubmit={this.switchEdit}
				>
					<Form.Input
						label="div ID"
						type="text"
						name="id"
						value={this.state.id}
						placeholder="<div> #ID"
						onChange={this.handleChange}
					/>
					<Form.Input
						label="Paragraph Content"
						type="text"
						name="content"
						value={this.state.content}
						placeholder="Content"
						onChange={this.handleChange}
					/>
					<Button
						compact
						size="mini"
						color="orange"
						className="preview"
						type="submit"
					>
						Submit
					</Button>
				</Form>
			</div>
		) : (
			<div id={this.state.id && this.state.id}>
				<ParagraphComponent info={this.state} />
				<Button
					compact
					size="mini"
					color="teal"
					className="edit-button-on"
					onClick={this.switchEdit}
					width={6}
				>
					Edit
				</Button>
			</div>
		);
	}
}
