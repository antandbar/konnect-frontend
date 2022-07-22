import client from "../api/client";

const advertsBaseUrl = '/apiv1';

export const getLocations = () =>{
    const url = `${advertsBaseUrl}/location`;
    return client.get(url);
}

export const getCategories = () =>{
    const url = `${advertsBaseUrl}/category`;
    return client.get(url);
}

export const getActivities = () => {
    const url = `${advertsBaseUrl}/activities`;
    return client.get(url);
}

export const getSignedPeople = (activityId) => {
    const url = `${advertsBaseUrl}/count/signedup/${activityId}`;
    return client.get(url);
}

export const getInterestedPeople = (activityId) => {
    const url = `${advertsBaseUrl}/count/interested/${activityId}`;
    return client.get(url);
}


export const getActivity = (activityId) => {
    const url = `${advertsBaseUrl}/activities/${activityId}`;
    return client.get(url);
}


export const createActivity = (activity) => {
    const url = `${advertsBaseUrl}/activities`;
    return client.post(url, activity);
  };


/*export const activityCreation =(activity, user) =>{
    const url = `${advertsBaseUrl}/activities/?userStatusId=1&userId=${user}&activityId=${activity}`;
    return client.post(url);
}*/


export const getCreator = (activity) => {
    const url = `${advertsBaseUrl}/Tracking?userStatusId=1&activityId=${activity}`;
    return client.get(url);
  };

  //Recibo objeto con result > un array -> un objeto > user . id

