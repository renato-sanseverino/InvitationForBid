import React from 'react'


export default function ClickableField({ rowId, label, parentRef }) {

	const handleClick = () => {
        // const root = ReactDom.createRoot(document.getElementById('panel'));

        // const contractorForm = React.createElement(ContractorForm, { id: rowId, parentRef: parentRef }, null);
		// root.render(contractorForm);
	}

	return (
		<button onClick={handleClick} style={{ color: 'darkblue', background: 'none', border: 'none' }} >
			<b><u>{label}</u></b>
		</button>
	)
}
