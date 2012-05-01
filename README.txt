Introduction
============

This package displays scaled Plone content images inside Thickbox.


Overview
--------

If you upload a standalone image into your site then you'll get your image
preview in a thickbox instead being redirected to separate image full screen
view.

If you link a scale of already existing image in your Page body via TinyMCE
editor then you'll also get image full version preview in a thickbox.

Finally if you upload image as part of News Item content object into dedicated Image Field, then you also will get it's original size preview in a thickbox.


Compatibility
-------------

This add-on was tested for Plone 4.0 and 4.1 series. So it works for both:

* old style image scales source urls like ``/image_thumb``
* as well as for new ``/@@images/image/thumb``-like urls provided by
  ``plone.app.imaging`` package


Installation
------------

* to add the package to your Zope instance, please, follow the instructions found inside the
  ``docs/INSTALL.txt`` file
* then restart your Zope instance and install the ``collective.imageinbox``
  package from within the ``portal_quickinstaller`` tool


Notes
-----

If you install this addon thickbox automatically will be attached to all scaled
versions of content images. In case you do not want to provide full version
preview for any of you image, then you have an option to do this by adding
``noThickBox`` class name to your image html tag.

This package uses ``prepOverlay`` ``jQuery`` plugin to display thickboxes.


Live Examples
=============

* http://www.martinschoel.com/en/portfolio/choose-help


Credits
=======


Companies
---------

|martinschoel|_

* `Martin Schoel Web Productions <http://www.martinschoel.com/>`_
* `Contact us <mailto:python@martinschoel.com>`_


Authors
-------

* Vitaliy Podoba <vitaliy@martinschoel.com>


Contributors
------------


.. |martinschoel| image:: http://cache.martinschoel.com/img/logos/MS-Logo-white-200x100.png
.. _martinschoel: http://www.martinschoel.com/
