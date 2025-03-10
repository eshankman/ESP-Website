const teamBios = {
  _reps: [],

  get reps() {
    return this._reps;
  },

  addEmployee(newFirstName, newLastName, newTerritory, newPhone, newEmail){
    const newEmployee = {
      firstName: newFirstName,
      lastName: newLastName,
      Territory: newTerritory,
      Phone: newPhone,
      Email: newEmail
    };
    this._reps.push(newEmployee)
  }
}

teamBios.addEmployee('Ellen', 'Shankman', 'Connecticut', '(860) 668-7209', 'ellen@erstoys.com');
teamBios.addEmployee('Alison', 'Cassler', 'Western Mass & Vermont', '(802) 238-6696', 'alisoncassler@comcast.net');
teamBios.addEmployee('Karen', 'Stahl', 'Upstate New York', '(888) 368-8594', 'kstahl9837@aol.com');
teamBios.addEmployee('Michael', "D\'Agostinio", 'New Hampshire & Maine', '(207) 232-0388', 'michaeldag@msn.com');
teamBios.addEmployee('Carolyn', 'Rider-McGovern', 'Eastern Mass, Boston, North & South Shore', '(978) 495-2564)', 'carmcgovern@comcast.net');
teamBios.addEmployee('Edie', 'McCaslands', 'Rhode Island', '(508-801-1553)','edith.casland@gmail.com');
teamBios.addEmployee('Laura', 'Vetter', 'Cape Code & the Islands', '(401) 423-0436', 'lauravettersales@aol.com');

console.log(teamBios.reps)

