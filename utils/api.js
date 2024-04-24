import baseUrl from './baseUrl';

// Function to handle API requests
const apiRequest = async (endpoint, method, body, headers) => {
    try {
      const requestOptions = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers, // Merge additional headers
        },
      };
  
      if (body) {
        requestOptions.body = JSON.stringify(body);
      }
  
      const response = await fetch(`${baseUrl}${endpoint}`, requestOptions);
  
      return await response.json();
    } catch (error) {
      console.error(`Error with ${method} request to ${endpoint}:`, error);
      throw error;
    }
  };

const apiRequest1 = async (endpoint, method, body, headers) => {
    try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(body),
        });

        return await response.json();
    } catch (error) {
        console.error(`Error with ${method} request to ${endpoint}:`, error);
        throw error;
    }
};

// Reusable functions for different HTTP methods
export const postRequest = async (endpoint, body, token) => {
    let headers = {}
    if (token) {
        headers = {
            Authorization: `Token ${token}`,
          };
    }
    return await apiRequest(endpoint, 'POST', body, headers);
    console.log(apiRequest,'data')
};

export const getRequest = async (endpoint, token) => {
    let headers = {}
    if (token) {
        headers = {
            Authorization: `Token ${token}`,
          };
    }
    return await apiRequest(endpoint, 'GET', null, headers);
};

export const patchRequest = async (endpoint, body) => {
    return await apiRequest(endpoint, 'PATCH', body, {});
};

export const deleteRequest = async (endpoint) => {
    return await apiRequest(endpoint, 'DELETE', {});
};

