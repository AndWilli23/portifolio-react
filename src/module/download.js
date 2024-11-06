
export const download = () => {

    const link = document.createElement("a")
    link.href = "../../../public/curriculo.pdf"
    link.download = "curriculo.pdf"
    link.click()
}