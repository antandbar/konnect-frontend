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


export const getActivity = (activityId) => {
    const url = `${advertsBaseUrl}/activities/${activityId}`;
    return client.get(url);
}


export const createActivity = (activity) => {
    const url = `${advertsBaseUrl}/activities`;
    return client.post(url, activity);
  };