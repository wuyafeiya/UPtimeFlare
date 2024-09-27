const pageConfig = {
  title: "网站监测",
   links: [
    { link: '', label: 'GitHub' },
    { link: '', label: 'Email Me', highlight: true },
  ],
}
const workerConfig = {
  kvWriteCooldownMinutes: 5,
  monitors: [
    {
      id: 'origin',
      name: 'Origin',
      method: 'GET',
      target: 'https://www.OriginCloud0.com'
    },
    {
      id: 'Pkq',
      name: 'PKQ',
      method: 'GET',
      target: 'https://www.pkqcloudx.com'
    },
    {
      id: 'EXf',
      name: 'EXF',
      method: 'GET',
      target: 'https://portal.flexline9.com'
    },
    {
      id: 'scto',
      name: 'scto',
      method: 'GET',
      target: 'https://www.sctocloud.com'
    },
        {
      id: 'foxi',
      name: 'foxi',
      method: 'GET',
      target: 'https://foxicloud0.com'
    },
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
