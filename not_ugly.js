const filterTables = () => {
	const classDashboard = document.getElementById("class-dashboard")
	const inputExists = document.getElementById('filter')

	if (classDashboard && !inputExists) {
		const labelAndInput = `<div class="m-3"><label for="filter">Which table are you looking for?</label>
		<input id='filter' type="text" name="table"></div>`

		const filterTables = (event) => {
			const filterParams = event.currentTarget.value
			const regexp = new RegExp(filterParams, "i")
			const studentRows = document.querySelectorAll(".dashboard-students-overflow .flexbox")
			studentRows.forEach((studentRow) => {
				const tableName = studentRow.querySelector(".student-table a").innerText
				studentRow.style.display = regexp.test(tableName) ? "" : "none"
			});
		}


		classDashboard.insertAdjacentHTML('afterbegin', labelAndInput)
		const input = document.getElementById('filter')
		input.addEventListener('keyup', filterTables)
	}
}

filterTables();