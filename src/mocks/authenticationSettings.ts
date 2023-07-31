

// import mock from "./adapter";
// import { Settings } from "../types/settings";


// const settings: Settings[] = [
//     {
//         environment: "DEFAULT",
//         type: "authOkta",
//         code: "AuthorizationServerId",
//         value: "default"
//     },
//     {
//         environment: "DEFAULT",
//         type: "authOkta",
//         code: "ClientId",
//         value: "0oamz9pl85CddK1vt357"
//     }
// ];

// function fakeRequest(time: number) {
//     return new Promise((res) => setTimeout(res, time));
// }

// mock.onGet("/api/settings").reply(async () => {
//     try {
//         await fakeRequest(1000);

//         // const { environment, type } = JSON.parse(config.data);
//         // const filteredSettings = settings.filter((_setting) => _setting.environment === environment && _setting.type === type);

//         const filteredSettings = settings

//         if (!filteredSettings) {
//             return [
//                 400,
//                 { message: "There is no setting corresponding to environment and type." },
//             ];
//         }

//         return [200, { filteredSettings }];
//     } catch (error) {
//         console.error(error);
//         return [500, { message: "Internal server error" }];
//     }
// });

// // mock.onPost("/api/auth/sign-up").reply(async (config) => {
// //     try {
// //         await fakeRequest(1000);

// //         const { email, password, firstName, lastName } = JSON.parse(config.data);
// //         let user = users.find((_user) => _user.email === email);

// //         if (user) {
// //             return [
// //                 400,
// //                 {
// //                     message:
// //                         "There already exists an account with the given email address.",
// //                 },
// //             ];
// //         }

// //         user = {
// //             id: faker.datatype.uuid(),
// //             displayName: `${firstName} ${lastName}`,
// //             email,
// //             password,
// //             avatar: null,
// //         };

// //         const accessToken = sign({ userId: user.id }, JWT_SECRET, {
// //             expiresIn: JWT_EXPIRES_IN,
// //         });

// //         return [200, { accessToken, user }];
// //     } catch (error) {
// //         console.error(error);
// //         return [500, { message: "Internal server error" }];
// //     }
// // });

// // mock.onGet("/api/auth/my-account").reply((config) => {
// //     try {
// //         const { Authorization } = config.headers!;

// //         if (!Authorization) {
// //             return [401, { message: "Authorization token missing" }];
// //         }

// //         const accessToken = (Authorization as string).split(" ")[1];
// //         const data = verify(accessToken, JWT_SECRET);
// //         const userId = typeof data === "object" ? data?.userId : "";
// //         const user = users.find((_user) => _user.id === userId);

// //         if (!user) {
// //             return [401, { message: "Invalid authorization token" }];
// //         }

// //         return [200, { user }];
// //     } catch (error) {
// //         console.error(error);
// //         return [500, { message: "Internal server error" }];
// //     }
// // });
