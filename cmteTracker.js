var olaCmte = [
  'financial-transparency',
  'estimates',
  'finance-economic-affairs',
  'general-government',
  'government-agencies',
  'justice-policy',
  'public-accounts',
  'regulations-private-bills',
  'social-policy',
  'legislative-assembly',
]

function olaTracker() {
	for (i = 0; i < olaCmte.length; i++) {
		window.open('https://www.ola.org/en/legislative-business/committees/' + olaCmte[i] + '/parliament-42/notice-hearings', '_blank');
	}
};

function cmteTracker() {
	window.open('http://www.ourcommons.ca/Committees/en/Participate#participate', '_blank');
};

function senTracker() {
	window.open('https://sencanada.ca/en/committees/studiesandbills/?pagesize=25', '_blank');
	window.open('https://www.parl.ca/LegisInfo/BillsBeforeCommittee.aspx?Language=E', '_blank');
};

function trackAll() {
	olaTracker();
	cmteTracker();
	senTracker();
};
