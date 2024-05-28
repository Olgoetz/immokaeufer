
# Configure the GitHub Provider
provider "github" {}

resource "github_repository" "immokaeufer" {
  name        = "immokaeufer"
  description = "Codebase for die-immobilien-kaeufer website"

  visibility = "public"
  auto_init  = true

}

resource "github_branch" "prod" {
  repository = github_repository.immokaeufer.name
  branch     = "prod"
}
