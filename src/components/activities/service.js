import client from "../api/client";

const activitiesBaseUrl = '/apiv1';

export const getLocations = () =>{
    const url = `${activitiesBaseUrl}/location`;
    return client.get(url);
}

export const getCategories = () =>{
    const url = `${activitiesBaseUrl}/category`;
    return client.get(url);
}

export const getActivities = () => {
    const url = `${activitiesBaseUrl}/activities`;
    return client.get(url);
}

export const getSignedPeople = (activityId) => {
    const url = `${activitiesBaseUrl}/count/signedup/${activityId}`;
    return client.get(url);
}

export const getInterestedPeople = (activityId) => {
    const url = `${activitiesBaseUrl}/count/interested/${activityId}`;
    return client.get(url);
}


export const getActivity = (activityId) => {
    const url = `${activitiesBaseUrl}/activities/${activityId}`;
    return client.get(url);
}


export const createActivity = (activity) => {
    const url = `${activitiesBaseUrl}/activities`;
    return client.post(url, activity);
  };


export const getCreator = (activity) => {
    const url = `${activitiesBaseUrl}/Tracking?userStatusId=1&activityId=${activity}`;
    return client.get(url);
  };

  
export const createStatus =(data) =>{
    const url = `${activitiesBaseUrl}/Tracking`;
    return client.post(url, data);
}

export const deleteStatus =(trackId) =>{
    const url = `${activitiesBaseUrl}/Tracking/${trackId}`;
    return client.delete(url);
}

export const getActivitiesRelation = (status, user, actId) =>{
    const url = `${activitiesBaseUrl}/Tracking?userStatusId=${status}&userId=${user}&activityId=${actId}`;
    return client.get(url);
}
