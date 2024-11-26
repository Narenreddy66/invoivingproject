// Determines the base domain based on the environment
export const domain = process.env.NODE_ENV === "production" ? "" : "/api";

// Optional: Specify file domain if required
export const fileDomain = "";

// Doctype constants
export const doctypes = {
  users: "User",
  taxpayerdetails:"TaxPayerDetail"
};

// API endpoints
export const apis = {
  savedocs: `${domain}/api/method/frappe.desk.form.save.savedocs`, // Save documents API
  resource: `${domain}/api/resource/`, // Resource API endpoint
};
export const tokens = {
  Apikey: "7b22762ca2fda78",
  secretkey: "2caaf1c1ca14e53",

}
