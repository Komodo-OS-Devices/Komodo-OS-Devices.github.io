import React from 'react';

function Changelog() {
  return (
    <section id="changelog-page" class="bg-light">
      <div class="container">
        <div class="row">
          <div id="changelog" class="col-lg-9 col-md-8 mb-5 order-2 order-md-1">
            <p class="fs-2 mb-4">Changelog</p>
            <div id="4.5">
              <div class="cl-scroll"></div>
              <p>
                <span class="badge rounded-pill bg-primary fs-6 px-3">
                  v4.4 - Snowdrop
                </span>{' '}
                - 17 Aug 2022
              </p>
              <ul class="mb-5">
                <li>Merge tag August SPL</li>
                <li>Fix menu popup ripple</li>
                <li>Fix issue with linked notification volume</li>
                <li>Remove duplicate clamping on move action</li>
                <li>Remove misplaced call to set crop view padding</li>
                <li>Add extra crop boundaries</li>
                <li>Fix suspicious space around QS mobile icons</li>
                <li>Disable magnification for partial screenshots</li>
                <li>Fix QS mobile icon disappearing on theme switch</li>
                <li>Fix OOM cache app optimizer flaky test</li>
                <li>Enable system compaction at bootup</li>
                <li>Introduce GamesProps and add user toggle for GamesProps</li>
                <li>Optimize download/upload animations</li>
                <li>Allow using 4G icon instead of LTE</li>
                <li>Improve 4G icon switch code</li>
                <li>Add support for displaying Volte icon</li>
                <li>Add Volte Icon Toggle</li>
                <li>Improvement art bionic optimization from aospa</li>
                <li>Fixed Pixel Launcher crash when using the music widget</li>
              </ul>
            </div>
            <div id="4.4">
              <div class="cl-scroll"></div>
              <p>
                <span class="badge rounded-pill bg-primary fs-6 px-3">
                  v4.4 - Seroja
                </span>{' '}
                - 07 Jul 2022
              </p>
              <ul class="mb-5">
                <li>Merge tag android-12.1.0_r11</li>
                <li>Update build fingerprint to july 2022</li>
                <li>Add Taskbar for Launcher3</li>
                <li>Add Icon and Icon text size customization</li>
                <li>Add toggle for desktop and drawer labels</li>
                <li>Allow disabling workspace edit</li>
                <li>Fix occasional NPE</li>
                <li>Introduce Lawnchair</li>
                <li>Fixed blank Internet QSTile after reboot</li>
                <li>Move Wifi icons after mobile data icon</li>
                <li>Silence Shortcut package logspam</li>
                <li>Add colors to assistant animation</li>
                <li>Initial import lineage hardware</li>
                <li>Add Touch HIDL Support</li>
                <li>Add keyhandler overlays</li>
                <li>
                  Move high touch sensitivity and hovering to InputService
                </li>
                <li>Introduce high touch polling rate feature control</li>
                <li>Update some icon to MD2</li>
                <li>Allow to hide arrow for back gesture</li>
                <li>
                  Fix pink progress animation color in expanded Wi-Fi tile
                </li>
                <li>Add support for timeout-reboot</li>
                <li>Silence PowerUI debug logspill</li>
                <li>Fix some Wifi Display NPE</li>
                <li>Increase Zygote command buffer size to 32k</li>
                <li>Fix incall proximity not turning off display</li>
                <li>Use public types to update system UI visibility</li>
                <li>Fix swapped backup/heavy oom adj labels</li>
                <li>Reset QS on UI mode change</li>
                <li>Add left padding for keyguard slices</li>
                <li>Add Fingerprint authentication vibration</li>
                <li>Add 2 button navigation bar overlay</li>
                <li>Fix QS clock overlapping on UI mode change</li>
              </ul>
            </div>
            <div id="4.3">
              <div class="cl-scroll"></div>
              <p>
                <span class="badge rounded-pill bg-primary fs-6 px-3">
                  v4.3 - SweetPea
                </span>{' '}
                - 07 Jun 2022
              </p>
              <ul class="mb-5">
                <li>Merge tag android-12.1.0_r8</li>
                <li>Add hotspot settings to allow VPN upstreams</li>
                <li>Allow changing monet settings from Reptools</li>
                <li>Update PixelPropsUtils Fingerprint to june 2022</li>
                <li>Add option to scramble pin layout when unlocking</li>
                <li>Add LockScreen Quick Unlock</li>
                <li>
                  Apply monet to fingerprint authentication ripple animation
                </li>
                <li>Update 4G+ icon to Silk design as well</li>
                <li>Allow overlaying max notification icons</li>
                <li>Increase max attemps failed Fingerprint</li>
                <li>Add auto brightness button to QS brightness slider</li>
                <li>Enable USAP by default</li>
                <li>Allow disabling ripple effect on unlock</li>
                <li>Make Quick Unlock compatible with long PIN/Password</li>
                <li>Fix SystemUI Crash in several devices</li>
                <li>Touch response optimizations</li>
                <li>Add Pixel Navigation Bar's Home icon</li>
                <li>Fix ripple animation for side fp devices</li>
                <li>Add support for persistent usb drive notification</li>
                <li>Enable smart battery for everyone</li>
                <li>Set scroll friction to 0.012</li>
                <li>Disable wallpaper zoom</li>
                <li>Add backup shared mode</li>
                <li>Silence a lot of debug logspam</li>
                <li>Fix edit button in screenshot share activity</li>
                <li>Reduce padding use by privacy indicator resources</li>
                <li>Block OTA downloading from GMS</li>
                <li>Fix manual network selection with old modem</li>
                <li>Update external card state based on current app</li>
                <li>Release wakelock if setRadioCapability is not supported</li>
                <li>Restore support with RadioConfig@1.0 dsds clients</li>
                <li>Handle all gms exact alarm denials</li>
                <li>Add config for repainter integration service</li>
                <li>Import themed icons for pixel launcher from lawicons</li>
                <li>Provide required permission for cellbroadcastreceiver</li>
              </ul>
            </div>
            <div id="4.2">
              <div class="cl-scroll"></div>
              <p>
                <span class="badge rounded-pill bg-primary fs-6 px-3">
                  v4.2 - Sakura
                </span>{' '}
                - 16 Apr 2022
              </p>
              <ul class="mb-5">
                <li>Merged April 2022 patch</li>
                <li>Bump version to 4.2</li>
                <li>Rebased android-12.1.0_r4</li>
                <li>Nuke monet settings</li>
                <li>Remove some feature cause conflict with 12L</li>
                <li>Allow doubletap/longpress power to toggle torch</li>
                <li>Update raven and redfin fp to April</li>
                <li>Fix the unlock sound played repeatedly</li>
                <li>And many other changes</li>
              </ul>
            </div>
            <div id="4.1">
              <div class="cl-scroll"></div>
              <p>
                <span class="badge rounded-pill bg-primary fs-6 px-3">
                  v4.1 - Serunai
                </span>{' '}
                - 11 Feb 2022
              </p>
              <ul class="mb-5">
                <li>Merged February 2022 patch</li>
                <li>Bump version to 4.1</li>
                <li>Add Volume waker</li>
                <li>
                  Allow to suppress notifications sound/vibration if screen is
                  ON
                </li>
                <li>Update string for add tiles with one click</li>
                <li>Add DataSwitchTile</li>
                <li>Add a toggle for secure tiles on keyguard</li>
                <li>Allow overriding feature flags on release builds</li>
                <li>SystemUI: Allow overlaying max notification icons</li>
                <li>SystemUI: Bring back ic_qs_bluetooth_connected.xml</li>
                <li>base: SystemUI: Kill fake navbar once again</li>
                <li>
                  SystemUI: Allow snoozing SD card notification by
                  unconditionally
                </li>
                <li>Allow to disable Ripple effect animaton</li>
              </ul>
            </div>
            <div id="4.0-alpha">
              <div class="cl-scroll"></div>
              <p>
                <span class="badge rounded-pill bg-primary fs-6 px-3">
                  v4.0-alpha - Sabre
                </span>{' '}
                - 20 Des 2021
              </p>
              <ul class="mb-5">
                <li>Komodo OS Android 12 - Sabre</li>
                <li>Merged December 2021 Security Patch</li>
                <li>Swipe to screenshot</li>
                <li>Add Monet</li>
                <li>Add Network Traffic</li>
                <li>Add Double tap to sleep on statusbar and lockscreen</li>
                <li>Add volume key music control</li>
                <li>Add Sync QS tile</li>
                <li>Add USB Tether QS tile</li>
                <li>Add AmbientDisplay QS tile</li>
                <li>Add Caffeine QS tile</li>
                <li>Add FPS info tile</li>
                <li>Add CPU Info tile</li>
                <li>Add Screenshot tile</li>
                <li>Add Sound tile</li>
                <li>Add global action with advanced reboot</li>
                <li>Allow disable of screenshot shutter sound</li>
                <li>Add refresh rate settings</li>
                <li>
                  Add switch for linked ring and media notification volumes
                </li>
                <li>Add Navigation bar settings</li>
                <li>Add Pill length for Gesture settings</li>
                <li>
                  Amount of screen height used as touchable region for back
                  gesture
                </li>
                <li>Allow user to add/remove QS with one click</li>
              </ul>
            </div>
            <div id="3.2.1">
              <div class="cl-scroll"></div>
              <p>
                <span class="badge rounded-pill bg-primary fs-6 px-3">
                  v3.2.1 - Raptor
                </span>{' '}
                - 20 July 2021
              </p>
              <ul class="mb-5">
                <li>Merged September 2021 Security Patch</li>
                <li>September redfin build fingerprint</li>
                <li>Fix overlay resetting every reboot</li>
                <li>Add HW key Custom & HW backlight</li>
                <li>Add rusian translate thanks to @BEERdMANN</li>
                <li>Rebranding Komodo Settings to Reptools</li>
                <li>Fix null pointer on Reptools</li>
                <li>And other little optimization</li>
              </ul>
            </div>
            <div id="3.2.0">
              <div class="cl-scroll"></div>
              <p>
                <span class="badge rounded-pill bg-primary fs-6 px-3">
                  v3.2.0 - Rattle
                </span>{' '}
                - 20 July 2021
              </p>
              <ul class="mb-5">
                <li>Merged July 2021 Security Patch</li>
                <li>Drop gradient shit</li>
                <li>Add new qs tint</li>
                <li>Add P mobile type icon</li>
                <li>Add Haptic Feedback to tiles</li>
                <li>Add QS animationr</li>
                <li>Add LTE to 4G switch</li>
                <li>Bring back GVM picker</li>
                <li>Add icon VoWifi</li>
                <li>Dynamic VoWifi & VoLTE icon</li>
                <li>Add statusbar icon switches</li>
                <li>Add navigation gesture</li>
              </ul>
            </div>
            <div id="3.1.0">
              <div class="cl-scroll"></div>
              <p>
                <span class="badge rounded-pill bg-primary fs-6 px-3">
                  v3.1.0 - Reptile
                </span>{' '}
                - 15 Juni 2021
              </p>
              <ul class="mb-5">
                <li>June security patch android 11.0.0_r38</li>
                <li>Added Sound tile</li>
                <li>Added option to record for longer</li>
                <li>Added LTE tile</li>
                <li>Added Adaptive charging</li>
                <li>Added runtime UI background blur</li>
                <li>Added Statusbar Ticker</li>
                <li>Added back signature spoofing</li>
                <li>Added hiding lock icon on lockscreen</li>
                <li>Clean up omnistyle header image</li>
                <li>Explicitly make SBC Dual Channel an optional (HD) codec</li>
                <li>Fix label tint for random color</li>
                <li>Fixed google sans font</li>
                <li>Improvment QS Detail layout</li>
                <li>Improvment volume dialog code</li>
                <li>Improvment settings layout</li>
                <li>Improvment gaming mode</li>
                <li>Improvment toast notification</li>
                <li>Improvment network traffic layout</li>
                <li>Remove glassy themes</li>
                <li>Remove device hostname</li>
              </ul>
            </div>
            <div id="3.0.0">
              <div class="cl-scroll"></div>
              <p>
                <span class="badge rounded-pill bg-primary fs-6 px-3">
                  v3.0.0 - Reptile Beta
                </span>{' '}
                - 15 Maret 2021
              </p>
              <ul class="mb-5">
                <li>March security patch android 11.0.0_r38</li>
                <li>Initial A11</li>
                <li>Add battery health</li>
                <li>Add Grid/Colom QS</li>
                <li>Add Brightness position</li>
                <li>Add BT stack</li>
                <li>And another</li>
              </ul>
            </div>
            <div id="2.5.0">
              <div class="cl-scroll"></div>
              <p>
                <span class="badge rounded-pill bg-primary fs-6 px-3">
                  v2.5.0 - Pantura
                </span>{' '}
                - 15 Maret 2021
              </p>
              <ul class="mb-5">
                <li>Latest security patch android 11.0.0</li>
                <li>Clean up omnistyle header image</li>
                <li>Explicitly make SBC Dual Channel an optional (HD) codec</li>
                <li>Fix label tint for random color</li>
                <li>Fixed google sans font</li>
                <li>Improvment QS Detail layout</li>
                <li>Improvment volume dialog code</li>
                <li>Improvment settings layout</li>
                <li>Improvment gaming mode</li>
                <li>Improvment toast notification</li>
                <li>Improvment network traffic layout</li>
                <li>Remove glassy themes</li>
                <li>Remove device hostname</li>
              </ul>
            </div>
          </div>
          <div id="version" class="col-lg-3 col-md-4 mb-5 order-1 order-md-2">
            <div class="bg-white shadow sidebar">
              <div class="card-body">
                <div class="py-1">
                  <div class="bg-primary rounded text-center text-white position-sticky">
                    <p class="py-2">Latest</p>
                  </div>
                  <a href="#4.5" class="d-block py-1 text-dark">
                    v4.5 - Snowdrop
                  </a>
                  <div class="bg-light rounded text-center mt-2">
                    <p class="py-2">Older</p>
                  </div>
                  <a href="#4.4" class="d-block py-1 text-dark">
                    v4.4 - Seroja
                  </a>
                  <a href="#4.3" class="d-block py-1 text-dark">
                    v4.3 - SweetPea
                  </a>
                  <a href="#4.2" class="d-block py-1 text-dark">
                    v4.2 - Sakura
                  </a>
                  <a href="#4.1" class="d-block py-1 text-dark">
                    v4.1 - Serunai
                  </a>
                  <a href="#4.0" class="d-block py-1 text-dark">
                    v4.0 - Sabre
                  </a>
                  <a href="#4.0-alpha" class="d-block py-1 text-dark">
                    v4.0-alpha - Sabre-alpha
                  </a>
                  <a href="#3.2.1" class="d-block py-1 text-secondary">
                    v3.2.1 - Raptor
                  </a>
                  <a href="#3.2.0" class="d-block py-1 text-secondary">
                    v3.1.0 - Rattle
                  </a>
                  <a href="#3.1.0" class="d-block py-1 text-secondary">
                    v3.1.0 - Reptile
                  </a>
                  <a href="#3.0.0" class="d-block py-1 text-secondary">
                    v3.0.0 - Reptile Beta
                  </a>
                  <a href="#2.5.0" class="d-block py-1 text-secondary">
                    v2.5.0 - Pantura
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Changelog;
