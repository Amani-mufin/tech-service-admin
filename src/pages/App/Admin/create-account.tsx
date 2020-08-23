import React, { useState } from 'react';
import Styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiDotsHorizontal } from '@mdi/js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../../../commons/button';

interface createAccountProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CreateAccount(props: createAccountProps) {
	const { onClick } = props;
	const [state, setState] = useState({
		fullname: '',
		email: '',
		password: '',
		role: '',
		loading: false,
		showError: null,
	});

	function handleChange(event: any) {
		event.persist();
		setState({
			...state,
			[event.target.name]: event.target.value,
		});
	}

	function notify() {
		toast.info('You have successfully created an account!');
	}

	async function handleSubmit(event: any) {
		event.preventDefault();

		try {
			const data = {
				fullname: 'fullname',
				email: 'email@email.com',
				password: 'password',
				role: 'QA',
			};

			if (data) {
				setState({
					...state,
					fullname: '',
					email: '',
					password: '',
					role: '',
					loading: false,
					showError: null,
				});
				notify();
			}
		} catch (error) {
			setState({
				...state,
				showError: error.message,
				loading: false,
			});
		}
	}

	function handleClick() {
		setState({
			...state,
			loading: true,
		});
	}

	const { fullname, email, password, loading, showError } = state;
	return (
		<PopupContainer>
			<PopupContent>
				{showError ? (
					<ShowError>
						<h2>{showError}</h2>
					</ShowError>
				) : null}
				<span>
					<p>Create New Account</p>
					<span>
						<Icon path={mdiDotsHorizontal} size={0.6} color='#8181A5' />
					</span>
				</span>
				<form onSubmit={handleSubmit}>
					<span>
						<InputContainer>
							<label className='label'>Full name</label>
							<br />
							<input
								type='text'
								placeholder='Start typing'
								onChange={handleChange}
								name='fullname'
								value={fullname}
								className='input'
							/>
						</InputContainer>
					</span>
					<span>
						<InputContainer>
							<label>Email</label>
							<br />
							<input
								type='email'
								placeholder='Start typing'
								onChange={handleChange}
								name='email'
								value={email}
							/>
						</InputContainer>
						<InputContainer className='input_div'>
							<label>Password</label>
							<br />
							<input
								type='password'
								placeholder='Start typing'
								onChange={handleChange}
								name='password'
								value={password}
							/>
						</InputContainer>
					</span>
					<p>Choose category</p>
					<Role>
						<input
							type='radio'
							value='Admin'
							name='role'
							id='admin'
							onChange={handleChange}
						/>
						<label htmlFor='admin'>Admin</label>
						<input
							type='radio'
							value='QA'
							name='role'
							id='qa'
							onChange={handleChange}
						/>
						<label htmlFor='qa'>QA</label>
						<input
							type='radio'
							value='Categorizer'
							name='role'
							id='categorizer'
							onChange={handleChange}
						/>
						<label htmlFor='categorizer'>Categorizer</label>
					</Role>
					<span>
						<Button
							value='Cancel'
							buttonClass='cancel_button'
							onClick={onClick}
						/>
						{loading ? (
							<Button value='Loading...' buttonClass='add_button' />
						) : (
							<Button
								value='Add Account'
								buttonClass='add_button'
								onClick={handleClick}
							/>
						)}
					</span>
					<ToastContainer />
				</form>
			</PopupContent>
		</PopupContainer>
	);
}

const PopupContainer = Styled.div`
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
    position: fixed;
    width: 100%;
    z-index: 9999;
`;

const PopupContent = Styled.div`
width: 80%;
max-width: 50rem;
background: #ffff;
margin: 10% auto;
border-radius: 4px;
padding: 1rem;
display: flex;
flex-direction: column;
span{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    p{
        color: #8181A5;
        font-size: 14px;
    }
    span{
        width: 1rem;
        height: 1rem;
        border-radius: 5px;
        background-color:#F6F6F6;
        border-color: #ECECF2
        display: flex;
        justify-content: center;
        align-items: center;

    }
}
form{
    padding: 1rem;
    span{
    p{
        color: #84859a;
        font-weight: 600;
        font-size: 0.8rem;
    }
    .cancel_button{
        background-color: #F6F6F6;
        color: #8181A5;
        border-radius: 4px;
        font-size: 10px;
        border: none;
        padding: 10px 25px;
        font-weight: 600;
    }
    .add_button{
        background-color: #5E81F4;
        color: #FFFFFF;
        border-radius: 4px;
        font-size: 10px;
        border: none;
        padding: 10px 15px;
        font-weight: 600;
    }
    .input_div{
           margin-left: 2rem;
       }
}
`;

const Role = Styled.div`
    display: flex;
    margin-bottom: 2rem;
    label{
        color: #8181A5;
        margin-right: 1rem;
        font-size: 0.8rem;
    }
`;

const InputContainer = Styled.div`
           width: 100%;
        label{
            font-size: 0.8rem;
            color: #84859a;
    font-weight: 600;
    padding-bottom: 0.7rem;
    text-transform: capitalize;
        }
        input{
            font-size: 0.8rem;
            width: 100%;
            border: none;
            border-bottom: 1px solid #eeeeee;
        color: #000000;
        padding: 0.4rem 0;
        outline: none;
        }
`;

const ShowError = Styled.div`
display: flex;
  justify-content: center;
        h2{
            color: #ca3844;
  font-size: 1rem;
        }
`;
