from setuptools import setup, find_packages
import os

version = '1.0'

setup(name='collective.imageinbox',
      version=version,
      description="Displays scaled plone content images inside Thickbox.",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?:action=list_classifiers
      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        ],
      keywords='plone image scales thickbox',
      author='Vitaliy Podoba',
      author_email='vitaliy@martinschoel.com',
      url='https://github.com/martinschoel/collective.imageinbox',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['collective'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          # -*- Extra requirements: -*-
      ],
      entry_points="""
      # -*- Entry points: -*-

      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
