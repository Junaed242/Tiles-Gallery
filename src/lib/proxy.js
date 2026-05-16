import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const proxy = async (endpoint) => {
    const baseURL = process.env.NEXT_PUBLIC_JSON_SERVER_URL || "http://localhost:5000";
    
    const res = await fetch(`${baseURL}${endpoint}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch from proxy: ${res.statusText}`);
    }

    return res.json();
};