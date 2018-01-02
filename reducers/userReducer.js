const initialState = [];

export default function reducer(state = initialState, action) 
	{
		switch(action.type)
		{
			 case "ADD_USER_DATA": {
			   return [ ...state, { FirstName: action.payload.FirstName,
	 LastName:  action.payload.LastName,
         Company: action.payload.Company,
	 Address: action.payload.Address,
         Tel: action.payload.Tel,
	 DOB: action.payload.DOB }]
			  
			}
		}
	return state
}
