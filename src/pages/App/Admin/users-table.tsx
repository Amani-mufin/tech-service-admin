import React from 'react';
import Styled from 'styled-components';

export default function UserTable() {
	const users = [
		{
			fullname: 'sam',
			email: 'sam@mail.com',
			role: 'Admin',
			createdAt: '2020-08-18T13:33:17.098+00:00',
		},
	];

	function renderUsers() {
		return (
			users &&
			users.map((user: any, index: number) => {
				const oldDate = [user.createdAt].map((arr) => {
					const date = new Date(parseInt(arr));
					return date.toUTCString();
				});

				return (
					<tr key={index}>
						<td className='bold_text'>{user.fullname}</td>
						<td className='light_text'>{user.email}</td>
						<td className='light_text'>{user.role}</td>
						<td className='bold_text'>{oldDate}</td>
					</tr>
				);
			})
		);
	}
	return (
		<UserContainer style={{ overflowX: 'auto' }}>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Role</th>
						<th>Created at</th>
					</tr>
				</thead>
				<tbody>{users && renderUsers()}</tbody>
			</table>
		</UserContainer>
	);
}

const UserContainer = Styled.div`
    table{
        margin-bottom: 1rem;
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      th,
      td{
        padding: 1rem;
          font-size: 16px;
          text-align: left;
      }
      thead{
        background-color: #F5F5FA66; 
        th{
            padding: 1rem;
          background-color: #F5F5FA66;
          color: #8181A5;
          font-size: 16px; 
          text-align: left;
        }
      }
      tbody{
          tr{
            border: 1px solid #ECECF2;
        background-color: #FFFFFF;
        border-radius: 10px;
        padding: 1rem 0;
        -webkit-box-shadow: 0px 4px 28px 0px rgba(241, 239, 239, 1);
        -moz-box-shadow: 0px 4px 28px 0px rgba(241, 239, 239, 1);
        box-shadow: 0px 4px 28px 0px rgba(241, 239, 239, 1);
        .bold_text {
          font-size: 16px;
          color: #1C1D21;
          font-weight: 600;
        }

        .light_text {
          font-size: 16px;
          color: #1C1D21;
          font-weight: 400;
        }
          }
      }
    }
`;
