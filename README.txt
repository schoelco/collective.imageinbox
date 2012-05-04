Introduction
============

This package displays scaled Plone content images inside Thickbox.


Overview
--------

If you upload a standalone image into your site this package allows you to
display your image preview in a thickbox instead of redirecting to a stand-alone
page.

Further, if you link from a scaled version to a full version of an image inside
the TinyMCE editor this package allows you to display the full version view in a
thickbox.

Finally, if you upload images as part of a News Item content object into
dedicated Image Field, then you also will get it's original size preview in a
thickbox.


Compatibility
-------------

This add-on was tested for the Plone 4.0 and 4.1 series. So it works for both:

* old style image scales source urls like ``/image_thumb``
* as well as for new ``/@@images/image/thumb``-like urls provided by
  ``plone.app.imaging`` package


Installation
------------

* to add the package to your Zope instance, please, follow the instructions
  found inside the
  ``docs/INSTALL.txt`` file
* then restart your Zope instance and install the ``collective.imageinbox``
  package from within the ``portal_quickinstaller`` tool.


Notes
-----

If you install this add-on, thickbox will be automatically  attached to all
scaled versions of content images. If you don't want to provide a full version
preview for any of your images, then you have an option to do this by adding a
``noThickBox`` class name to your image html tag.

This package uses the ``prepOverlay`` plugin of ``jQuery`` library to display
thickboxes.


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
