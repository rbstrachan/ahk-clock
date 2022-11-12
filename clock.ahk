#Include WebView2.ahk

clock := gui("AlwaysOnTop -caption")
clock.backColor := "242426"
clock.show("w" A_ScreenWidth*0.8 " h" A_ScreenHeight*0.8)
wv := WebView2.create(clock.hwnd)
wv.CoreWebView2.navigate("C:\Programming\ahk-clock\index.html")

HotIfWinExist("ahk_id " clock.Hwnd) ;so it doesn't override any other possible escape hotkeys
hotkey("Escape", destroyClockGUI, "on")	; destroy the clock when escaped

destroyClockGUI(guiObj, *) {
   HotIfWinExist("ahk_id " guiObj.Hwnd)
	hotkey("Escape", "off")
	clock.destroy()
}
