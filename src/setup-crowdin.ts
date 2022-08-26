import Crowdin, {
    Credentials,
    StringTranslations,
} from "@crowdin/crowdin-api-client";
import {Lang} from "./useL10n";

const tempAccessToken = process.env.REACT_APP_CROWDIN_ACCESS_TOKEN!;
const projectId = 528474;

// credentials
const credentials: Credentials = {
    token: tempAccessToken
};

const crowdinInstance = new Crowdin(credentials)

// initialization of crowdin client
// const { translationsApi } = new crowdin(credentials);

const stringTranslationsApi = new StringTranslations(credentials);

// initialization of ProjectsGroups
// const projectsGroupsApi = new ProjectsGroups(credentials);

// get projects but not more than 1000
// projectsGroupsApi
//   .withFetchAll(1000)
//   .listProjects()
//   .then((projects) => console.log(projects))
//   .catch((error) => console.error(error));

export async function downloadTranslations(language: Lang) {
    // const fileId = 456;
    // const downloadLink = await translationsApi.buildProjectFileTranslation(
    //   projectId,
    //   fileId,
    //   {
    //     targetLanguageId: language
    //   }
    // );
    // const response = await fetch(downloadLink.data.url);
    // const translations = await response.json();
    // console.log(translations);
    return crowdinInstance.translationsApi.exportProjectTranslation(projectId, {
        // cast to their type if it doesn't match
        targetLanguageId: language,
        format: 'xliff'
    })
        .then(res => res.data.url)
        .then(fetch)
        .then(r => r.json())
    //   .then((translationApiResponse) => {
    //     console.log(">>>", translationApiResponse);
    //   });
}
